function sort(elements){
    //假设第0个元素是一个有序的数列，第1个以后的是无序的序列，
    //所以从第1个元素开始将无序数列的元素插入到有序数列中
    for(var i = 1; i < elements.length; i++){
        //升序
        if(elements[i] < elements[i-1]){
            //取出无序数列中的第i个作为被插入元素
            var guard = elements[i];
            //记住有序数列的最后一个位置，并且将有序数列位置扩大一个
            var j = i - 1;
            elements[i] = elements[j];

            //比大小，找到被插入元素所在的位置
            while(j >= 0 && guard < elements[j]){
                elements[j+1] = elements[j];
                j--;
            }

            //插入
            elements[j+1] = guard;
        }
    }
}

var elements = [10, 9, 8, 7, 6, 5];
console.log('before: ' + elements);
sort(elements);
console.log(' after: ' + elements);
