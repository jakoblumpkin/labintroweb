# HandleEvents

                    $('#myID').click(function() {
                        alert('The element myID was clicked');
                    });

## CSS
- cursor, 'pointer'
                    $('#mydiv').on('click', function() {
                        //handle click event
                    });
 

                    turns off all events connected to mydiv.
                    $('#mydiv').off('click', function() {
                        //handle click event
                    });

                    $('#mydiv').on('mouseover mouseleave', function() {
                        //handle click event
                    });

                    $('#MyDiv').on('mouseenter mouseleave mouseup', function (e) {
                        $(this).toggleClass('Highlight');
                        $(this).css('cursor', 'pointer');
                        if(e.type == 'mouseup') {
                            $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
                        }
                    });

                    $("#MyTable tbody").on("click", "tr",
                    function(event) {
                        alert('Row was clicked and buublled up');
                    });

                    $("MyTable tr").on({
                        mouseenter: function() {

                        },
                        mouseleave: funtion() {

                        }
                    });

                    $(selector).hover(handlein, handleout)
                    $(selector).hover(both)
