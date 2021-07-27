- .each(function(index, Element))
- $('div').each(function(index) {
    alert(index + '=' + $(this).text());
});

- $('div').each(function(index, elem) {
    alert(index + '=' + $(elem).text());
});

//update attribute
$('img').attr('title', 'My Image Title');

/multiple attributes
$('img').attr({
    title: 'My Image Title',
    style: 'border: 2px solid black;'
});


# setting attributes and css

$('div.BlueDiv,div.RedDiv')
        .attr(
            {
                title: 'Some title 3'
                style: 'background-color: red; color: black;'
            }
        )
        .css('background-color', 'yellow')
        .css('color', 'black)
        .css('font-size, '20px');

# Adding and Removing Nodes

- $('<span>(office)</span>').appendTo('.officePhone');
- $('.officePhone').append('<span>(office)</span>');

- $('<span>(office)</span>').prependTo('.officePhone');
- $('.officePhone').prepend('<span>(office)</span>');

## Wrap

- $('.state).wrap('<div class="US_State" />');

- Results
                                <div class="US_State">
                                <div class="state">Arizona</div>
                                </div>

## Remove
- $('.phone, .location').remove();

## css muliple
- $('div').css({
   'background-color': 'purple',
   'color': red
});

## Classes
- .addClass()
- .hasClass()
- .removeClass()
- .toggleClass() add or remove
- $('#PhoneDetails').toggleClass('highlight')