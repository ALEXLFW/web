$(document).ready(
    function() {
        /*$e.preventDefault();*/
        $('i.fa-home').click(
            function() {
                $('i.fa-home').css('color','#ff8c00');
                $('i.fa-bell-o').css('color','#4c4c4c');
                $('i.fa-file-text-o').css('color','#4c4c4c');
                $('i.fa-user').css('color','#4c4c4c');
                $('h2#tmpFaText').css('color','#ff8c00');
                $('h2#tmpTextCur').css('color','#4c4c4c');
                $('h2#tmpFaText3').css('color','#4c4c4c');
                $('h2#tmpFaText4').css('color','#4c4c4c');
            }
        );
        $('i.fa-file-text-o').click(
            function() {
                $('i.fa-file-text-o').css('color','#ff8c00');
                $('i.fa-home').css('color','#4c4c4c');
                $('i.fa-bell-o').css('color','#4c4c4c');
                $('i.fa-user').css('color','#4c4c4c');
                $('h2#tmpFaText3').css('color','#ff8c00');
                $('h2#tmpTextCur').css('color','#4c4c4c');
                $('h2#tmpFaText').css('color','#4c4c4c');
                $('h2#tmpFaText4').css('color','#4c4c4c');
            }
        );
        $('i.fa-user').click(
            function() {
                $('i.fa-user').css('color','#ff8c00');
                $('i.fa-home').css('color','#4c4c4c');
                $('i.fa-file-text-o').css('color','#4c4c4c');
                $('i.fa-bell-o').css('color','#4c4c4c');
                $('h2#tmpFaText4').css('color','#ff8c00');
                $('h2#tmpTextCur').css('color','#4c4c4c');
                $('h2#tmpFaText').css('color','#4c4c4c');
                $('h2#tmpFaText3').css('color','#4c4c4c');
            }
        );
        $('i.fa-bell-o').click(
            function() {
                $('i.fa-bell-o').css('color','#ff8c00');
                $('i.fa-home').css('color','#4c4c4c');
                $('i.fa-file-text-o').css('color','#4c4c4c');
                $('i.fa-user').css('color','#4c4c4c');
                $('h2#tmpTextCur').css('color','#ff8c00');
                $('h2#tmpFaText').css('color','#4c4c4c');
                $('h2#tmpFaText3').css('color','#4c4c4c');
                $('h2#tmpFaText4').css('color','#4c4c4c');
                /*window.location.assign('http://www.baidu.com');*/
            }
        );
        
        $('h#tmpFaText').click(
            function() {
                $('i.fa-home').css('color','#ff8c00');
                $('i.fa-bell-o').css('color','#4c4c4c');
                $('i.fa-file-text-o').css('color','#4c4c4c');
                $('i.fa-user').css('color','#4c4c4c');
                $('h2#tmpFaText').css('color','#ff8c00');
                $('h2#tmpTextCur').css('color','#4c4c4c');
                $('h2#tmpFaText3').css('color','#4c4c4c');
                $('h2#tmpFaText4').css('color','#4c4c4c');
            }
        );
        $('h#tmpFaText3').click(
            function() {
                $('i.fa-file-text-o').css('color','#ff8c00');
                $('i.fa-home').css('color','#4c4c4c');
                $('i.fa-bell-o').css('color','#4c4c4c');
                $('i.fa-user').css('color','#4c4c4c');
                $('h2#tmpFaText3').css('color','#ff8c00');
                $('h2#tmpTextCur').css('color','#4c4c4c');
                $('h2#tmpFaText').css('color','#4c4c4c');
                $('h2#tmpFaText4').css('color','#4c4c4c');
            }
        );
        $('h#tmpFaText4').click(
            function() {
                $('i.fa-user').css('color','#ff8c00');
                $('i.fa-home').css('color','#4c4c4c');
                $('i.fa-file-text-o').css('color','#4c4c4c');
                $('i.fa-bell-o').css('color','#4c4c4c');
                $('h2#tmpFaText4').css('color','#ff8c00');
                $('h2#tmpTextCur').css('color','#4c4c4c');
                $('h2#tmpFaText').css('color','#4c4c4c');
                $('h2#tmpFaText3').css('color','#4c4c4c');
            }
        );
        $('h2#tmpTextCur').click(
            function() {
                $('i.fa-bell-o').css('color','#ff8c00');
                $('i.fa-home').css('color','#4c4c4c');
                $('i.fa-file-text-o').css('color','#4c4c4c');
                $('i.fa-user').css('color','#4c4c4c');
                $('h2#tmpTextCur').css('color','#ff8c00');
                $('h2#tmpFaText').css('color','#4c4c4c');
                $('h2#tmpFaText3').css('color','#4c4c4c');
                $('h2#tmpFaText4').css('color','#4c4c4c');
            }
        ); 
    }
);