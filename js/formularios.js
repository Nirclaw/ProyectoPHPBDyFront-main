export { contact_info, chapters,areas,cities,journey,levels,personal_ref,position,regions,routes };
/*HTML*/

const contact_info = `<div class="input-group mb-3">
   <span class="input-group-text" >id Staff</span>
   <input type="text" class="form-control"   name="id_staff">
 </div>
 <div class="input-group mb-3">
   <span class="input-group-text" >Instagram</span>
   <input type="text" class="form-control"  name="instagram" required>
 </div>
 <div class="input-group mb-3">
   <span class="input-group-text" >linkedin</span>
   <input type="text" class="form-control" name="linkedin" required>
 </div>
 <div class="input-group mb-3">
   <span class="input-group-text" >Whatsapp</span>
   <input type="text" class="form-control"  name="whatsapp" required>
 </div>
 <div class="input-group mb-3">
   <span class="input-group-text" >email</span>
   <input type="text" class="form-control"  name="email" required>
 </div>
 <div class="input-group mb-3">
   <span class="input-group-text" >address</span>
   <input type="text" class="form-control"  name="address" required>
 </div>
 <div class="input-group mb-3">
   <span class="input-group-text" >numero celular</span>
   <input type="text" class="form-control" name="cel_number"  required>
 </div>

 <button type="button" class="btn btn-primary" data-bs-toggle="modal"
							data-bs-target="#exampleModal">
							enviar
						</button>

 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
 aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h1 class="modal-title fs-5" id="exampleModalLabel">Enviar registros</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal"
         aria-label="Close"></button>
     </div>
     <div class="modal-body">
       esta seguro de registar al usuario?
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary"
         data-bs-dismiss="modal">Close</button>
       <button type="submit" class="btn btn-primary bfff" href="#" role="button"
         id="enviar" value="enviar">Registrar</button>

     </div>
   </div>
 </div>
</div>
 `;

/*HTML*/

const chapters = `<div class="input-group mb-3">
<span class="input-group-text">id_thematic_units</span>
<input type="number" class="form-control" name="id_thematic_units" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">name_chapter</span>
<input type="text" class="form-control" name="name_chapter" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">start_date</span>
<input type="date" class="form-control" name="start_date" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">end_date</span>
<input type="date" class="form-control" name="end_date" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">description</span>
<input type="text" class="form-control" name="description" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">duration_days</span>
<input type="text" class="form-control" name="duration_days" required>
</div>

<button type="button" class="btn btn-primary" data-bs-toggle="modal"
							data-bs-target="#exampleModal">
							enviar
						</button>

 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
 aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h1 class="modal-title fs-5" id="exampleModalLabel">Enviar registros</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal"
         aria-label="Close"></button>
     </div>
     <div class="modal-body">
       esta seguro de registar al usuario?
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary"
         data-bs-dismiss="modal">Close</button>
       <button type="submit" class="btn btn-primary bfff" href="#" role="button"
         id="enviar" value="enviar">Registrar</button>

     </div>
   </div>
 </div>
</div>
`;
/*HTML*/

const levels = `<div class="input-group mb-3">
<span class="input-group-text">name_level</span>
<input type="number" class="form-control" name="name_level" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">group_level</span>
<input type="text" class="form-control" name="group_level" required>
</div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal"
							data-bs-target="#exampleModal">
							enviar
						</button>

 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
 aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h1 class="modal-title fs-5" id="exampleModalLabel">Enviar registros</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal"
         aria-label="Close"></button>
     </div>
     <div class="modal-body">
       esta seguro de registar al usuario?
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary"
         data-bs-dismiss="modal">Close</button>
       <button type="submit" class="btn btn-primary bfff" href="#" role="button"
         id="enviar" value="enviar">Registrar</button>

     </div>
   </div>
 </div>
</div>

`;

/*HTML*/
const personal_ref = `<div class="input-group mb-3">
<span class="input-group-text">full_name</span>
<input type="number" class="form-control" name="full_name" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">cel_number</span>
<input type="text" class="form-control" name="cel_number" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">relationship</span>
<input type="date" class="form-control" name="relationship" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">occupation</span>
<input type="date" class="form-control" name="occupation" required>
</div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal"
							data-bs-target="#exampleModal">
							enviar
						</button>

 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
 aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h1 class="modal-title fs-5" id="exampleModalLabel">Enviar registros</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal"
         aria-label="Close"></button>
     </div>
     <div class="modal-body">
       esta seguro de registar al usuario?
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary"
         data-bs-dismiss="modal">Close</button>
       <button type="submit" class="btn btn-primary bfff" href="#" role="button"
         id="enviar" value="enviar">Registrar</button>

     </div>
   </div>
 </div>
</div>
`;

const regions = `<div class="input-group mb-3">
<span class="input-group-text">name_region</span>
<input type="number" class="form-control" name="name_region" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">id_country</span>
<input type="text" class="form-control" name="id_country" required>
</div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal"
							data-bs-target="#exampleModal">
							enviar
						</button>

 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
 aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h1 class="modal-title fs-5" id="exampleModalLabel">Enviar registros</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal"
         aria-label="Close"></button>
     </div>
     <div class="modal-body">
       esta seguro de registar al usuario?
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary"
         data-bs-dismiss="modal">Close</button>
       <button type="submit" class="btn btn-primary bfff" href="#" role="button"
         id="enviar" value="enviar">Registrar</button>

     </div>
   </div>
 </div>
</div>
`;

const routes = `<div class="input-group mb-3">
<span class="input-group-text">name_route</span>
<input type="number" class="form-control" name="name_route" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">start_date</span>
<input type="date" class="form-control" name="start_date" required>
</div><div class="input-group mb-3">
<span class="input-group-text">end_date</span>
<input type="date" class="form-control" name="end_date" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">description</span>
<input type="text" class="form-control" name="description" required>
</div><div class="input-group mb-3">
<span class="input-group-text">duration_month</span>
<input type="text" class="form-control" name="duration_month" required>
</div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal"
							data-bs-target="#exampleModal">
							enviar
						</button>

 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
 aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h1 class="modal-title fs-5" id="exampleModalLabel">Enviar registros</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal"
         aria-label="Close"></button>
     </div>
     <div class="modal-body">
       esta seguro de registar al usuario?
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary"
         data-bs-dismiss="modal">Close</button>
       <button type="submit" class="btn btn-primary bfff" href="#" role="button"
         id="enviar" value="enviar">Registrar</button>

     </div>
   </div>
 </div>
</div>
`;

const position=`<div class="input-group mb-3">
<span class="input-group-text" >name_position</span>
<input type="number" class="form-control" name="name_position"required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">arl</span>
<input type="date" class="form-control" name="arl" required>
</div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal"
							data-bs-target="#exampleModal">
							enviar
						</button>

 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
 aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h1 class="modal-title fs-5" id="exampleModalLabel">Enviar registros</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal"
         aria-label="Close"></button>
     </div>
     <div class="modal-body">
       esta seguro de registar al usuario?
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary"
         data-bs-dismiss="modal">Close</button>
       <button type="submit" class="btn btn-primary bfff" href="#" role="button"
         id="enviar" value="enviar">Registrar</button>

     </div>
   </div>
 </div>
</div>
`

const journey=`<div class="input-group mb-3">
<span class="input-group-text">name_journey</span>
<input type="number" class="form-control" name="name_journey" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">check_in</span>
<input type="datetime" class="form-control" name="check_in" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">check_out</span>
<input type="datetime" class="form-control" name="check_out" required>
</div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal"
							data-bs-target="#exampleModal">
							enviar
						</button>

 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
 aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h1 class="modal-title fs-5" id="exampleModalLabel">Enviar registros</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal"
         aria-label="Close"></button>
     </div>
     <div class="modal-body">
       esta seguro de registar al usuario?
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary"
         data-bs-dismiss="modal">Close</button>
       <button type="submit" class="btn btn-primary bfff" href="#" role="button"
         id="enviar" value="enviar">Registrar</button>

     </div>
   </div>
 </div>
</div>
`

const cities=`<div class="input-group mb-3">
<span class="input-group-text">name_city</span>
<input type="number" class="form-control" name="name_city" required>
</div>
<div class="input-group mb-3">
<span class="input-group-text">id_region</span>
<input type="number" class="form-control" name="id_region" required>
</div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal"
							data-bs-target="#exampleModal">
							enviar
						</button>

 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
 aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h1 class="modal-title fs-5" id="exampleModalLabel">Enviar registros</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal"
         aria-label="Close"></button>
     </div>
     <div class="modal-body">
       esta seguro de registar al usuario?
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary"
         data-bs-dismiss="modal">Close</button>
       <button type="submit" class="btn btn-primary bfff" href="#" role="button"
         id="enviar" value="enviar">Registrar</button>

     </div>
   </div>
 </div>
</div>
`

const areas =`<div class="input-group mb-3">
<span class="input-group-text">name_area</span>
<input type="number" class="form-control" name="name_area" required>
</div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal"
							data-bs-target="#exampleModal">
							enviar
						</button>

 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
 aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h1 class="modal-title fs-5" id="exampleModalLabel">Enviar registros</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal"
         aria-label="Close"></button>
     </div>
     <div class="modal-body">
       esta seguro de registar al usuario?
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary"
         data-bs-dismiss="modal">Close</button>
       <button type="submit" class="btn btn-primary bfff" href="#" role="button"
         id="enviar" value="enviar">Registrar</button>

     </div>
   </div>
 </div>
</div>
`