"""Simple script to add a post teaser to the index page & add link to archive.
Call with name of file in posts folder as argument, e.g.
> python add_to_index.py example_post.html
"""

import os
import re
import sys

from datetime import datetime


def main(filename, front=True):
    with open(os.path.join('../posts', filename), 'r') as fh:
        file_content = fh.read()
    post_content = re.search(
        r'<div class="in-content">\n(.+)</div>\s+<div class="foot-post">',
        file_content,
        flags=re.DOTALL
    ).group(1)
    title = re.search(r'<h1>(.+?)</h1>', file_content).group(1)
    first_p = re.search(r'^\s*(.*?<p>.+?</p>)', post_content, flags=re.DOTALL)
    if first_p:
        to_include = first_p.group(1)
    else:
        to_include = post_content
    # update index
    to_insert = f"""
    <div class="post">
        <!-- Heading -->
        <a href="./posts/{filename}"><h1>{title}</h1></a>
        
        <div class="in-content">
            {to_include}
            <a class="read-more" href="./posts/{filename}">Read more</a>
        </div>
    </div>
    """
    with open('../index.html', 'r') as fh:
        index_content = fh.read()
    if front:
        regex = r'<!-- Content -->\s*<div class="content">\s*<div class="container">\s*<!-- Post -->'
        x = re.search(regex, index_content).group()
        index_content = index_content.replace(x, x + to_insert + '<!-- /post -->\n\n\n\t<!-- Post -->')
    else:
        regex = r'<!-- /post -->\s+</div>\s*</div>\s*<footer>'
        x = re.search(regex, index_content).group()
        index_content = index_content.replace(x, '<!-- /post -->\n\n\n\t<!-- Post -->' + to_insert + x)
    with open('../index.html', 'w') as fh:
        fh.write(index_content)
    # update archive
    date = datetime.now().strftime('%B %Y')
    to_insert = f'<li><a href="./posts/{filename}">{title}</a> ({date})</li>'
    with open('../archive.html', 'r') as fh:
        archive_content = fh.read()
    regex = r'<br><br>\s*<ul>\s*'
    x = re.search(regex, archive_content).group()
    whitespace = re.search(r'\s*$', x).group()
    archive_content = archive_content.replace(x, x + to_insert + whitespace)
    with open('../archive.html', 'w') as fh:
        fh.write(archive_content)


if __name__ == '__main__':
    filename = sys.argv[1]
    if len(sys.argv) > 2:
        front = bool(int(sys.argv[2]))
        main(filename, front)
    else:
        main(filename)
