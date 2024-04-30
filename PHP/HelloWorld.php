<?php

echo "<pre>";
if(!empty($_POST)){
    echo "Mètode emprat: POST <br><br>";
    print_r($_POST);
}
elseif(!empty($_GET)){
    echo "Mètode emprat: GET <br><br>";
    print_r($_GET);
}
else{
    echo 'Dades del formulari buides (mètodes GET / POST)';
}

