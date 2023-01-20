function my_levenshtein(str1, str2){
	if(str1.length == 0 || str2.length == 0){
	    // console.log("return 0");
        return 0;
    }
    else if(str1.length != str2.length){
        // console.log("return -1");
        return -1;
    }
    else
    {
        value = 0;
        for(i=0;i<str1.length;i++){
            if(str1[i]!=str2[i]){
                value ++;
            }
        }
        return value;
    }
}
