$(document).ready(function(){
  $('#example').DataTable({
      searchPanes:{
        cascadePanes:true,
            dtOpts:{
            dom:'tp',
            paging:'true',
            pagingType:'numbers', //'numbers' o 'simple'
            searching:false, //true or false (busqueda que selecciones)
          }
    },
      dom:'Pfrtip',
      columnDefs:[{
        searchPanes:{
        show:false
      },
        targets:[5]
      }]
  });
});