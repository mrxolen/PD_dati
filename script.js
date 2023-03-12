$(document).ready(function() {
    // Загрузка данных из JSON-файлов
    $.getJSON('inventars.json', function(data) {
      addDataToTable(data);
    });
  
    $.getJSON('vielas.json', function(data) {
      addDataToTable(data);
    });
  
    // Обработчик событий на кнопки "Rādīt vielas", "Rādīt aprīkojumu" и "Rādīt visu"
    $('#show-vielas').click(function(e) {
      e.preventDefault();
      filterTable('vielas');
    });
  
    $('#show-inventars').click(function(e) {
      e.preventDefault();
      filterTable('inventars');
    });
  
    $('#show-all').click(function(e) {
      e.preventDefault();
      showAll();
    });
  
    // Добавление данных в таблицу
    function addDataToTable(data) {
      var tbody = $('#table-body');
      $.each(data, function(index, item) {
        var row = '<tr class="painted">';
        row += '<td class="centered">' + item.id + '</td>';
        row += '<td>' + item.nosaukums + '</td>';
        row += '<td>' + item.tips + '</td>';
        row += '<td>' + item.apakstips + '</td>';
        row += '<td>' + item.skaits + '</td>';
        row += '<td>' + item.svars + '</td>';
        row += '<td>' + item.komentari + '</td>';
        row += '</tr>';
        tbody.append(row);
      });
    }
  
    // Фильтрация таблицы по типу (vielas/inventars)
    function filterTable(type) {
      var tbody = $('#table-body');
      tbody.empty();
      $.getJSON(type + '.json', function(data) {
        addDataToTable(data);
      });
    }
  
    // Отображение всех данных
    function showAll() {
      var tbody = $('#table-body');
      tbody.empty();
      $.getJSON('inventars.json', function(data) {
        addDataToTable(data);
      });
  
      $.getJSON('vielas.json', function(data) {
        addDataToTable(data);
      });
    }
  });