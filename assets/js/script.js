$(function(){
    var $mainMenuItems = $("#main-menu ul").children("li"), //éléments du main-menu
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = 2,

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

          $(".button").hover(
            function(){
              $(this).addClass("hovered");
          },
            function(){
              $(this).removeClass("hovered");
            }
        );

        $(".button").click(function(){
          var newIndex = $(this).index();
          checkAndAnimateItem(newIndex);
        });

      },

      validIndex = function(indexToCheck){
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
      },

      animateItem = function($item, toOpen, speed){
        var $colorImage = $item.find(".color"), //image bw devient en couleur
        itemParam = toOpen ? {width: "420px"} : {width: "140px"}, //toOpen est vrai prend une largeur de 420px sinon prend une largeur de 140px
        colorImageParam = toOpen ? {left: "0px"} : {left: "140px"};
        $colorImage.animate(colorImageParam, speed); //image en couleur superposé sur image bw
        $item.animate(itemParam , speed); //largeur de l'image augmentée
      },

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
