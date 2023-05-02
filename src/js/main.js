$('form').on('submit', function(e) {
    e.preventDefault();
    const addTarefaValue = $('#adiciona-tarefa').val();
    const novoItem = $('<li></li>');
    $(`<a id="${addTarefaValue}">${addTarefaValue}</a>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
});

$('ul').on('click', 'a', function(){
    $(this).css('text-decoration', 'line-through');
});