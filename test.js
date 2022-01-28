/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x<0)
        return false;
    if (x>0)
    {
    var reverseX=0
    var i=0
    var initialX=x
     while (x>0.9)
    {
    reverseX=reverseX*10+(x%10)
    i=i+1
    x=x/10|0
    console.log(reverseX)
    }
    if (initialX==reverseX)
    {
        return false
    }
    else {
        return true
    }
 }};


 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    var output=[]
    
function sortLists (smaller,bigger) {
    j=0
    for (let i=0;i<smaller.length;i++)
        {
            output.push(smaller[i])
            
            while (bigger[j]<smaller[i+1])
        {
            output.push(bigger[j])
            j=j+1
        }
        }
return output

}

    if (list1==[] && list2==[])
        {
            output=[]
            return output
        }
 else if (list1==[])
        {
            output=list2
            return output
        }
     else if (list2==[])
        {
            output=list1
            return output
        }
    else {
        if (list1[0]>=list2[0])
            {
           output=sortLists(list2,list1)
            }
        else {
            output=sortLists(list1,list2)
            
        }
        return output
    }
    

    
    
};

console.log(mergeTwoLists([1,2,4,5,5],[1,3,4]))