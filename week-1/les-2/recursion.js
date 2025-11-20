
const menu = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Explore",
        path: '/explore',
        subpages: [
            {
                name: "Awards",
                path: '/awards',
                subpages: [
                    {
                        name: "Nominees",
                        path: '/nominees'
                    },
                    {
                        name: "Sites of the day",
                        path: '/sotd'
                    }
                ]
            },
            {
                name: "Blog",
                path: '/blog'
            }
        ]
    }
]

// Oefening:
// Log al de pagina's en hun path in de console.
// 1. ZONDER RECURSIE
// 2. MET RECURSIE



//without recursion
function showAll() {
    for (const submenu of menu) {
        showText(submenu);
        if (submenu.subpages) {
            for (const subpage of submenu.subpages) {
                showText(subpage);
                if (subpage.subpages) {
                    for (const innerSubpage of subpage.subpages) {
                        showText(innerSubpage);
                    }
                }

            }
        }
    }
}


//used in both showAll and showAllRecursion
function showText(currPage) {
    console.log(`${currPage.name} has path: ${currPage.path}`)

}

//with recursion
function showAllWithRecursion(list) {
    for (const item of list) {
        showText(item);

        if (item.subpages) {
            showAllWithRecursion(item.subpages);
        }
    }
}

showAllWithRecursion(menu);