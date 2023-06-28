<?php

require '../vendor/autoload.php';
header("Access-Control-Allow-Origin: *"); // Permitir cualquier origen
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");; // Permitir métodos GET, POST y OPTIONS
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit;
  }
$router = new \Bramus\Router\Router();
$dotenv = Dotenv\Dotenv::createImmutable("../")->load();


//-->contact_info<--///
$router->get("/contact_info", function () {

    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM contact_info");
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});
$router->get("/contact_info/search", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM contact_info WHERE id= :id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});

$router->put("/contact_info/update", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("UPDATE contact_info SET id_staff = :id_staff, whatsapp= :whatsapp, instagram= :instagram, email= :email, address= :address,cel_number= :cel_number WHERE id =:id");
    $res->bindValue("id_staff", $_DATA['id_staff']);
    $res->bindValue("whatsapp", $_DATA['whatsapp']);
    $res->bindValue("instagram", $_DATA['instagram']);
    $res->bindValue("email", $_DATA['email']);
    $res->bindValue("address", $_DATA['address']);
    $res->bindValue("cel_number", $_DATA['cel_number']);
    $res->bindValue("instagram", $_DATA['instagram']);
    $res->bindValue("id", $_DATA['id']);

    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->delete("/contact_info/delete", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("DELETE FROM contact_info WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->post("/contact_info/create", function () {

    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("INSERT INTO contact_info ( whatsapp,instagram,email,address,cel_number) VALUES ( :whatsapp,:instagram,:email,:address,:cel_number)");

    $res->bindValue("whatsapp", $_DATA['whatsapp']);
    $res->bindValue("instagram", $_DATA['instagram']);
    $res->bindValue("email", $_DATA['email']);
    $res->bindValue("address", $_DATA['address']);
    $res->bindValue("cel_number", $_DATA['cel_number']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});
//-->contact_info FIN<--///

//////////////////////////////////////////////
//-->chapters INICIO<--///


$router->get("/chapters", function () {
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM chapters");
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});
$router->get("/chapters/search", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM contact_info WHERE id= :id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});

$router->put("/chapters/update", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("UPDATE chapters SET id_thematic_units = :id_thematic_units, name_chapter= :name_chapter, start_date= :start_date, end_date= :end_date, description= :description,duration_days= :duration_days WHERE id =:id");
    $res->bindValue("id_thematic_units", $_DATA['id_thematic_units']);
    $res->bindValue("name_chapter", $_DATA['name_chapter']);
    $res->bindValue("start_date", $_DATA['start_date']);
    $res->bindValue("end_date", $_DATA['end_date']);
    $res->bindValue("description", $_DATA['description']);
    $res->bindValue("duration_days", $_DATA['duration_days']);
    $res->bindValue("id", $_DATA['id']);

    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->delete("/chapters/delete", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("DELETE FROM chapters WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->post("/chapters/create", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("INSERT INTO chapters ( id_thematic_units,name_chapter,start_date,end_date,description,duration_days) VALUES (:id_thematic_units,:name_chapter,:start_date,:end_date,:description,:duration_days)");
    $res->bindValue("id_thematic_units", $_DATA['id_thematic_units']);
    $res->bindValue("name_chapter", $_DATA['name_chapter']);
    $res->bindValue("start_date", $_DATA['start_date']);
    $res->bindValue("end_date", $_DATA['end_date']);
    $res->bindValue("description", $_DATA['description']);
    $res->bindValue("duration_days", $_DATA['duration_days']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

//-->chapters FIN<--///
///////////////////////////
//-->levels INICIO<--///


$router->get("/levels", function () {
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM levels");
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});
$router->get("/levels/search", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM contact_info WHERE id= :id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});

$router->put("/levels/update", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("UPDATE levels SET name_level = :name_level, group_level= :group_level WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->bindValue("name_level", $_DATA['name_level']);
    $res->bindValue("group_level", $_DATA['group_level']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->delete("/levels/delete", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("DELETE FROM levels WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->post("/levels/create", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("INSERT INTO levels ( name_level,group_level) VALUES (:name_level,:group_level)");
    $res->bindValue("name_level", $_DATA['name_level']);
    $res->bindValue("group_level", $_DATA['group_level']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

//-->levels FIN <--///
///////////////////////////////////////////
///->personal_ref INICIO <--///

$router->get("/personal_ref", function () {
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM personal_ref");
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});

$router->get("/personal_ref/search", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM contact_info WHERE id= :id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});

$router->put("/personal_ref/update", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("UPDATE personal_ref SET full_name = :full_name, cel_number= :cel_number, relationship= :relationship, occupation = :occupation WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->bindValue("full_name", $_DATA['full_name']);
    $res->bindValue("cel_number", $_DATA['cel_number']);
    $res->bindValue("relationship", $_DATA['relationship']);
    $res->bindValue("occupation", $_DATA['occupation']);

    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->delete("/personal_ref/delete", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("DELETE FROM personal_ref WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->post("/personal_ref/create", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("INSERT INTO personal_ref ( full_name,cel_number,relationship,occupation) VALUES (:full_name,:cel_number,:relationship,:occupation)");
    $res->bindValue("full_name", $_DATA['full_name']);
    $res->bindValue("cel_number", $_DATA['cel_number']);
    $res->bindValue("relationship", $_DATA['relationship']);
    $res->bindValue("occupation", $_DATA['occupation']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});
///--> personal_ref FIN <--///

///////////////////////////////////////////
///->regions INICIO <--///

$router->get("/regions", function () {
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM regions");
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});
$router->get("/regions/search", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM contact_info WHERE id= :id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});

$router->put("/regions/update", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("UPDATE regions SET name_region = :name_region, id_country= :id_country WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->bindValue("name_region", $_DATA['name_region']);
    $res->bindValue("id_country", $_DATA['id_country']);
   

    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->delete("/regions/delete", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("DELETE FROM regions WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->post("/regions/create", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("INSERT INTO regions ( name_region,id_country) VALUES (:name_region,:id_country)");
    $res->bindValue("name_region", $_DATA['name_region']);
    $res->bindValue("id_country", $_DATA['id_country']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

///--> regions FIN <--///

///-->routes INICIO <--///

$router->get("/routes", function () {
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM routes");
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});
$router->get("/routes/search", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM contact_info WHERE id= :id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});


$router->put("/routes/update", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("UPDATE routes SET name_route = :name_route, start_date= :start_date, end_date= :end_date, description= :description, duration_month= :duration_month   WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->bindValue("name_route", $_DATA['name_route']);
    $res->bindValue("start_date", $_DATA['start_date']);
    $res->bindValue("end_date", $_DATA['end_date']);
    $res->bindValue("description", $_DATA['description']);
    $res->bindValue("duration_month", $_DATA['duration_month']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->delete("/routes/delete", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("DELETE FROM routes WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->post("/routes/create", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("INSERT INTO routes ( name_route,start_date,end_date,description,duration_month) VALUES (:name_route,:start_date,:end_date,:description,:duration_month)");
    $res->bindValue("name_route", $_DATA['name_route']);
    $res->bindValue("start_date", $_DATA['start_date']);
    $res->bindValue("end_date", $_DATA['end_date']);
    $res->bindValue("description", $_DATA['description']);
    $res->bindValue("duration_month", $_DATA['duration_month']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

/// --> routers FIN <--///
/// --> position INCIO <--///

$router->get("/position", function () {
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM position");
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});
$router->get("/position/search", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM contact_info WHERE id= :id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});

$router->put("/position/update", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("UPDATE position SET name_position = :name_position, arl= :arl WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->bindValue("name_position", $_DATA['name_position']);
    $res->bindValue("arl", $_DATA['arl']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->delete("/position/delete", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("DELETE FROM position WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->post("/position/create", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("INSERT INTO position ( name_position,arl) VALUES (:name_position,:arl)");
    $res->bindValue("name_position", $_DATA['name_position']);
    $res->bindValue("arl", $_DATA['arl']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});
///--> positio FIN <--/// 

///--> journey INICIO <--///
$router->get("/journey", function () {
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM journey");
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});
$router->get("/journey/search", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM contact_info WHERE id= :id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});

$router->put("/journey/update", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("UPDATE journey SET name_journey = :name_journey, check_in= :check_in, check_out = :check_out  WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->bindValue("name_journey", $_DATA['name_journey']);
    $res->bindValue("check_in", $_DATA['check_in']);
    $res->bindValue("check_out", $_DATA['check_out']);

    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->delete("/journey/delete", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("DELETE FROM journey WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->post("/journey/create", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("INSERT INTO journey ( name_journey,check_in,check_out) VALUES (:name_journey,:check_in,:check_out)");
    $res->bindValue("name_journey", $_DATA['name_journey']);
    $res->bindValue("check_in", $_DATA['check_in']);
    $res->bindValue("check_out", $_DATA['check_out']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

///--> journey FIN <--///

///--> cities INICIO <--///
$router->get("/cities", function () {
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM cities");
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});

$router->get("/cities/search", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM contact_info WHERE id= :id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});

$router->put("/cities/update", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("UPDATE cities SET name_city = :name_city, id_region= :id_region  WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->bindValue("name_city", $_DATA['name_city']);
    $res->bindValue("id_region", $_DATA['id_region']);

    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->delete("/cities/delete", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("DELETE FROM cities WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->post("/cities/create", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("INSERT INTO cities ( name_city,id_region) VALUES (:id_region,:id_region)");
    $res->bindValue("name_city", $_DATA['name_city']);
    $res->bindValue("id_region", $_DATA['id_region']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

///--> cities FIN <--///


///--> areas INICIO <--///
$router->get("/areas", function () {
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM areas");
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});

$router->get("/areas/search", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("SELECT * FROM contact_info WHERE id= :id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($res, true);
});

$router->put("/areas/update", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("UPDATE areas SET name_area = :name_area  WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->bindValue("name_area", $_DATA['name_area']);

    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->delete("/areas/delete", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("DELETE FROM areas WHERE id =:id");
    $res->bindValue("id", $_DATA['id']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

$router->post("/areas/create", function () {
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $cox = new \App\connect();
    $res = $cox->con->prepare("INSERT INTO areas ( name_area) VALUES (:name_area)");
    $res->bindValue("name_area", $_DATA['name_area']);
    $res->execute();
    $res = $res->rowCount();
    echo json_encode($res);
});

///--> areas FIN <--///
$router->run();
