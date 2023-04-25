import json
import os
import markdown
import re

DATA_DIR = 'src/lib/data/'
POSTS_JSON = os.path.join(DATA_DIR, 'posts.json')
POSTS_DIR = 'src/routes/posts/'

def remove_scripts(post_contents: str):
    return re.sub(r'<script.*?</script>', '', post_contents, flags=re.DOTALL)

def strip_links(post_contents: str):
    # look for markdown-style links first
    post_contents = re.sub(r'\[(.*?)\]\(.*?\)', r'\1', post_contents)
    # then look for html-style links
    return re.sub(r'(?:<\s*a.*?>|<\s*/\s*a\s*>)', '', post_contents, flags=re.DOTALL)

def get_tags(post_contents: str, subdir: str):
    tags = re.search(r'<!-- TAGS: (.*?) -->', post_contents)
    if tags is None:
        print("! No tags found for " + subdir)
    return [tag.strip() for tag in tags.group(1).split(',')] if tags else []

def get_date(post_contents: str, subdir: str):
    date = re.search(r'<!-- DATE: (\d{4}-\d\d(?:-\d\d)?) -->', post_contents)
    if date is None:
        raise EnvironmentError("No date found for " + subdir)
    return date.group(1).strip()

def get_title(post_contents: str, subdir: str):
    title = re.search(r'<h1>(.*?)</h1>', post_contents)
    if title is None:
        # might be a markdown file
        title = re.search(r'^\s*# (.*?)$', post_contents, flags=re.MULTILINE)
    if title is None:
        raise EnvironmentError("No title found for " + subdir)
    return title.group(1).strip()

def get_preview(post_contents: str, title: str, subdir: str):
    preview = re.search(rf'{title}(.*)<!-- ENDPREVIEW -->', post_contents, flags=re.DOTALL)
    if preview is None:
        # try fallback
        preview = re.search(r'</h1>(.*)<!-- ENDPREVIEW -->', post_contents, flags=re.DOTALL)
        if preview is None:
            raise EnvironmentError("No preview found for " + subdir)
    # convert to html if needed
    return markdown.markdown(preview.group(1).strip())

def process_post(subdir: str):
    print("Processing " + subdir)
    post = { "slug": subdir }
    # find the file with the post contents
    post_contents = ""
    for file in os.listdir(POSTS_DIR + subdir):
        if file.startswith("+page."):
            with open(os.path.join(POSTS_DIR + subdir, file), 'r') as f:
                post_contents = f.read()
    if post_contents == "":
        raise EnvironmentError("No post contents found for " + subdir)
    post_contents = remove_scripts(post_contents)
    post_contents = strip_links(post_contents)
    # find tags in <!-- TAGS: tag1, tag2, ... -->
    post["tags"] = get_tags(post_contents, subdir)
    # get date from <!-- DATE: YYYY-MM -->
    post["date"] = get_date(post_contents, subdir)
    # extract the title from first h1
    post["title"] = get_title(post_contents, subdir)
    # remaining content before <!-- ENDPREVIEW --> is the preview
    post["preview"] = get_preview(post_contents, post['title'], subdir)
    return post

def _post_orderfn(post):
    date = post['date'] + '-00' if len(post['date'].split('-')) < 3 else post['date']
    return date + post['slug']

def process_posts():
    posts = []
    for subdir in os.listdir(POSTS_DIR):
        if os.path.isdir(POSTS_DIR + subdir):
            posts.append(process_post(subdir))
    posts.sort(key=_post_orderfn, reverse=True)
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
    with open(POSTS_JSON, 'w') as f:
        json.dump(posts, f)

if __name__ == "__main__":
    process_posts()
