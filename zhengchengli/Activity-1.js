$(document).ready(
    function() {
        $('input#tmpDialogueOpen').click(
            function($e) {
                $e.preventDefault();
                $('div#mask').show();
                $('div#mask').css('background','rgba(0,0,0,0.7)');
                $('div#tmpDialogue').addClass('tmpDialogueOn');
            }
        );
        
        $('input#tmpDialogueClose').click(
            function($e) {
                $e.preventDefault();
                $('div#mask').hide();
                $('div#mask').css('background','rgba(0,0,0,0)');
                $('div#tmpDialogue').removeClass('tmpDialogueOn');
            }
        );
        
        
    }
);