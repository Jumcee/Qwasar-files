function my_spaceship(info){

    R = 0;
    L = 0;
    U = 0;
    D = 0;
    x = 0;
    y = 0;
    direction = "";
    

    for(i = 0; i < info.length; i++){
        

        if(info[i] == "R"){
            R += 1;
            L -= 1;

        } else if(info[i] == "L") {
            L += 1;
            R -= 1;
   
        } else if(info[i] == "A"){
            if(R==2 || L==2) {
                y += 1;
            }
            
            else if(R==0 || L==0) {
                y -= 1;
            } 
            
            else if(R==1 || L==3) {
                x += 1;

            } else if(L==1 || R==3) {
                x -= 1;
            }
        }        
    }

    // find direction
    if(R==0 || L==0){
        direction = 'up'
    } else if(R==1 || L==3) {
        direction = 'right'
    }
    else if(R== 3 || L==1) {
        direction = 'left'
    } else if(R==2 || L==2){
        direction = 'down'
    }

    // push result into array
    result1 = "{x: " +x+ ", y: "+y+", direction: "+ "'"+ direction +"'"+"}";

        return result1;

}
