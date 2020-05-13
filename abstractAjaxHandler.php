<?php 
    abstract class AjaxHandler { 
        abstract protected function getData();

        protected function setHeaders() {
            header('Content-type', 'application/json');
        }
        
        protected function error($error = 'Something Went Wrong'){
            try { 
                throw new Exception($error);
            } catch(Throwable  $e) {
                echo json_encode(
                    array(
                        'status' => 'failed',
                        'error' => $error
                    )
                    );
            }
            exit;
        }
    }
?>
