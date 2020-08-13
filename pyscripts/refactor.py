#!/usr/bin/env python3
"""Used to replace code that appears in HTML files in main dir and posts dir
"""


import json
import os

REFACTOR_GUIDE = 'refactor_guide.json'

with open(REFACTOR_GUIDE, 'r') as fh:
    guide = json.load(fh)

find = guide['to_find']
replace = guide['replace_with']

main_files = [os.path.join('../', f) for f in os.listdir('../') \
                if f.lower().endswith('html')]
post_files = [os.path.join('../posts', f) for f in os.listdir('../posts') \
                if f.lower().endswith('html')]

for file in main_files + post_files:
    print(file)
    with open(file, 'r') as fh:
        file_content = fh.read()
    with open(file, 'w') as fh:
        fh.write(file_content.replace(find, replace))
