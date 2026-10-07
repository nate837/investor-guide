#!/usr/bin/env bash
# Publish the Investor Guide to GitHub Pages. Needs a one-time `gh auth login` first.
# Usage: bash deploy/github-pages.sh [repo-name]   (default repo name: investor-guide)
set -euo pipefail
REPO="${1:-investor-guide}"
cd "$(dirname "$0")/.."
gh auth status >/dev/null 2>&1 || { echo "Not logged in. Run: gh auth login"; exit 1; }
OWNER="$(gh api user --jq .login)"
node tests/generator.test.js >/dev/null
if [ ! -d .git ]; then git init -q -b main; fi
git add -A
git -c user.name="$OWNER" -c user.email="$OWNER@users.noreply.github.com" commit -q -m "Investor Guide site" || true
if ! gh repo view "$OWNER/$REPO" >/dev/null 2>&1; then
  gh repo create "$REPO" --public --source . --remote origin --push
else
  git remote get-url origin >/dev/null 2>&1 || git remote add origin "https://github.com/$OWNER/$REPO.git"
  git push -u origin main
fi
gh api -X POST "repos/$OWNER/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 || true
echo "Publishing… GitHub Pages usually takes 1–2 minutes."
echo "URL: https://$OWNER.github.io/$REPO/"
