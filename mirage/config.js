export default function() {

  this.namespace = 'https://dry-shore-2260.herokuapp.com/v1';  
  this.get('/resources');
  this.get('/resources/:id');
}
