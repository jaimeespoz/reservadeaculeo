cd /root/digital-ocean-github-actions-ci
git pull origin master
/root/.bun/bin/bun install
sudo systemctl restart digital-ocean-github-actions-ci
