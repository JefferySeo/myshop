(function(){
    const listAll = document.getElementsByClassName('list-all')[0];
    const cart = document.getElementById('cart');
    listAll.addEventListener("click", changeNav);
    cart.addEventListener('click', cartBoxView);

    function changeNav(){
        const nav = document.getElementsByTagName('nav')[0].offsetTop + 52;
        const sitemap = document.getElementById('sitemap');
        listAll.classList.toggle('close');
        listAll.classList.toggle('newlist');

        if(listAll.className == 'list-all close'){
            sitemap.style.top = nav + 'px';
            sitemap.style.display='block';
        }else{
            sitemap.style.display='none';
        }
    }

    function cartBoxView(){
        document.getElementsByClassName('cart-view')[0].classList.toggle('none');
    }

    // window.onload = function(){
    // }
}());