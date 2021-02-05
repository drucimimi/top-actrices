$(function(){
    // sélectionner l'image de chaque actrice
    // et voir la description de la 3e actrice au lancement de la page
    var $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = 2,

        //Si l'index de l'image est valide, on peut voir la description de l'actrice sélectionnée
        init = function(){
          bindEvents();
          if(validIndex(openedIndex)){
            animateItem($mainMenuItems.eq(openedIndex), true, 700);
          }
        },

        bindEvents = function(){
          $mainMenuItems.children(".images").click(function(){ //images d'actrices
            var newIndex = $(this).parent().index(); //index de l'image cliquée
            checkAndAnimateItem(newIndex);
          });

          //appliquer un nouveau style quand on passe au-dessus d'un bouton
          $(".button").hover(
            function(){
              $(this).addClass("hovered");
          },
            function(){
              $(this).removeClass("hovered");
            }
        );

        //quand on clique sur un bouton au nom de l'actrice, on peut voir la description de celle-ci
        $(".button").click(function(){
          var newIndex = $(this).index();
          checkAndAnimateItem(newIndex);
        });

      },

      validIndex = function(indexToCheck){
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
      },

      //quand on clique sur l'image d'actrice, elle est en couleur
      animateItem = function($item, toOpen, speed){
        var $colorImage = $item.find(".color"),
        itemParam = toOpen ? {width: "420px"} : {width: "140px"}, //toOpen est vrai prend une largeur de 420px sinon prend une largeur de 140px
        colorImageParam = toOpen ? {left: "0px"} : {left: "140px"};
        $colorImage.animate(colorImageParam, speed); //image en couleur superposé sur image bw
        $item.animate(itemParam , speed); //largeur de l'image augmentée
      },

      //quand on clique sur une autre image, la description de l'image pré-sélectionnée disparaît
      //et celle de l'image cliquée apparaît
      checkAndAnimateItem = function(indexToCheckAndAnimate){
        if(openedIndex === indexToCheckAndAnimate){
          animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
          openedIndex = -1
        } else{
            if(validIndex(indexToCheckAndAnimate)){
              animateItem($mainMenuItems.eq(openedIndex), false, 250);
              openedIndex = indexToCheckAndAnimate;
              animateItem($mainMenuItems.eq(openedIndex), true, 250);
            }
        }
      };

      init();

});
