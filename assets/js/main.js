$("#genBtn").click(function() {
    $('html,body').animate({
            scrollTop: $(".results").offset().top
        },
        'slow');
});

// Results
$('#form').on('submit', e => {
    e.preventDefault();

    var input = $('#input').val();
    var $results = $('#results');
    var items = StartupNameGenerator(input);
    $results.html('');
    items.forEach((item, idx) => {
        console.log(item, idx)
        $('<a class="result-item" target="_blank" ahref="https://shopify.pxf.io/5bQ1v2">').
        html(`<span>${item}</span>`).
        appendTo($results);
    });
});
