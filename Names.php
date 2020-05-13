<?php
require_once('abstractAjaxHandler.php'); 
class Names extends AjaxHandler{

    protected $names_array =["Moshe" , "Vered", "Yaron" , "Ayala" , "Noam" , "Emanuel"];
    
    public function getData(){
        try{
            $this->setHeaders();
            if($this->names_array && !empty($this->names_array)){
                return json_encode($this->names_array);
            }else{
                throw new Exception('data array does not exist');
            }
        }
        catch(Throwable  $e){
            return $this->error($e->getMessage());
        }
    }
}