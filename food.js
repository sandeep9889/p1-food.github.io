function toggleOpen(element)
{
    if (element.classList.contains("open"))
    {
        element.classList.remove("open");
    }
    else
    {
        element.classList.add("open");
    }
}

   
function toggleMobileMenu()
{
    mobile_menu = document.querySelector(".mobile-menu");
    toggleOpen(mobile_menu)
    backdrop = document.querySelector(".backdrop");
    toggleOpen(backdrop);
    console.log(mobile_menu)
}

