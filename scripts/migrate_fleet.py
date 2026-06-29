import json

with open('../data/fleet-data.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

print(data)