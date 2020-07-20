//faire glisser d'un navigateur à un autre 
<script>
    var presentation = document.getElementById('presentation'),
        etudes = document.getElementById('etudes'),
        professionnel = document.getElementById('professionnel'),
        divers = document.getElementById('divers');
  
    presentation.addEventListener('click', function() {
        alert("L'événement du div vient de se déclencher.");
    }, true);
  
    etudes.addEventListener('click', function('mousover') {
        alert("L'événement du span vient de se déclencher.");
    }, true);
  
    professionnel.addEventListener('click', function() {
        alert("L'événement du div vient de se déclencher.");
    }, true);
  
    diverss.addEventListener('click', function() {
        alert("L'événement du span vient de se déclencher.");
    }, true);
</script>