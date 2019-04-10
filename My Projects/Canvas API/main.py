import requests
import json
url = 'https://canvas.instructure.com/api/v1/courses'
#headers = {'Authorization' : '1012~o89Vizdg6oVEMHVv9ZyHcQz8nJEzr8H4GOS5tAambuACsumtrU3NxwiS3c9i1HMe'}
#r = requests.get(url, headers = headers)
r = requests.get('https://api.github.com/events')

print(r.status_code)
print(r.text)
print(r.json())


