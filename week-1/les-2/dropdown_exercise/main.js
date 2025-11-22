const dropdownMenu = {
    label: "Dropdown",
    items: [
        "Item 1",
        "Item 2",
        {
            label: "Submenu 1",
            items: [
                "Subitem 1.1",
                "Subitem 1.2",
                {
                    label: "Sub-submenu 1",
                    items: ["Sub-subitem 1.1", "Sub-subitem 1.2", "Sub-subitem 1.3"],
                },
            ],
        },
        "Item 3",
        {
            label: "Submenu 2",
            items: ["Subitem 2.1", "Subitem 2.2"],
        },
    ],
};

const $dropdownContainer = document.getElementById("dropdown-container");
$dropdownContainer.appendChild(generateDropdownHTML(dropdownMenu));


let html = "";

function generateDropdownHTML(obj) {
    html += `<li>${obj.label}`
    html += `<ul>`
    for (item of obj.items) {
        if (typeof item === "object") {
            generateDropdownHTML(item);
            html += `</ul></li>`
        } else {
            html += `<li>${item}</li>`
        }
    }
    return html
}

console.log(generateDropdownHTML(dropdownMenu));

