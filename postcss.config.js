module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

<li key={a.id} class="list-group-item">{a.text} {!edit?<><button type="button" class="btn btn-primary btn-sm "  onClick={()=>handleEdit(a.text)}>Edit</button></>:<> <button type="button" class="btn btn-primary btn-sm "  onClick={()=>handleEdit(a.text)}>Save</button></>} 
<button type="button" class="btn btn-danger btn-sm">Delete</button></li> 
