import urllib.request
import json
req = urllib.request.Request('https://api.github.com/repos/mythogenengine-cyber/MythogenEngine/actions/runs', headers={'User-Agent': 'Mozilla/5.0'})
res = urllib.request.urlopen(req).read()
data = json.loads(res)
print("Latest run status:", data['workflow_runs'][0]['status'])
print("conclusion:", data['workflow_runs'][0]['conclusion'])
print("html_url:", data['workflow_runs'][0]['html_url'])
print("created_at:", data['workflow_runs'][0]['created_at'])
