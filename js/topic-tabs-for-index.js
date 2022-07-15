function get_tags(heading) {
    let tags = [];
    for (const c of heading.classList) {
        if (c.startsWith("topic-")) {
            tags.push(c);
        }
    }
    return tags;
}

function create_tabs_for_heading(heading, tags) {
    const processed_tags = tags.map((x) => x.slice(6))
    const tag_text = "tags: " + processed_tags.join(", ");
    const content = heading.parentElement.nextElementSibling;
    let tag_div = document.createElement("div");
    tag_div.className = "tag-list";
    let label = document.createTextNode(tag_text);
    tag_div.appendChild(label);
    content.insertBefore(tag_div, content.lastChild);
}

function create_topic_tabs() {
    const headings = document.getElementsByTagName("h1");
    for (const heading of headings) {
        const tags = get_tags(heading);
        if (tags.length > 0) {
            create_tabs_for_heading(heading, tags);
        }
    }
}

create_topic_tabs();
