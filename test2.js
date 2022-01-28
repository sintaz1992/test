/**
 * Letter Combinations of a Phone Number
 * @param {string} digits
 * @return {string[]}
*/

 var letterCombinations = function(digits) {
    var result=[]
    var nummapstring={
        
        2:['a','b','c'],
        3:['a','b','c'],
        4:['a','b','c'],
        5:['a','b','c'],
        6:['a','b','c'],
        7:['a','b','c'],
    }
    var newstring=''
    for (let i=0; i< 3;i++)
    {
        for (let k=0;k<3;k++)
        {
        newstring= nummapstring[digits.charAt(0)][i]
        
    for (let j=1;j<digits.length;j++)
        {
             newstring=newstring+nummapstring[digits.charAt(j)][k]
            }
            result.push(newstring);
            newstring=''   
            }          
        }
        return result
};



var romantointeger = function(romandigit) {
    var result=0
    let symboltovalue={
I:1,
V:5,
X:10,
L:50,
C:100,
D:500,
M:1000
    }

    for (let i=0;i<romandigit.length;i++)
    {

        result=result+ symboltovalue[romandigit.charAt(i)]
    }

        return result
};


var jumpgame = function(nums) {


    let temp=0
    let i=0
    let result=false
    var checkReached=function (i) {

        if (nums[i]>= nums.length-i)
        {
            result=true;
        }
            else 
 {       
        temp=temp+nums[i]
        i=temp
        checkReached(i)
    }
}
checkReached(0) 

return result
 




};



var romantointeger = function(romandigit) {
    var result=0
    let symboltovalue={
I:1,
V:5,
X:10,
L:50,
C:100,
D:500,
M:1000
    }

    for (let i=0;i<romandigit.length;i++)
    {

        result=result+ symboltovalue[romandigit.charAt(i)]
    }

        return result
};


var maxproduct = function(nums) {


    let result=Math.max(nums)
    let temp=1
    let curMax=1
    let curMin=1
    
    for (let i=0;i<nums.length;i++)
    {
        if (nums[i]==0)
{
    curMax=1
    curMin=1
}
        let temp= nums[i]*curMax
        curMax=Math.max(temp,nums[i]*curMin, nums[i])
        curMin=Math.min(temp,nums[i]*curMin, nums[i])
        console.log('curMax')
        console.log(curMax)
        console.log('curMin')
     console.log(curMin)

    }
result=curMax
return result
 




};
console.log(maxproduct([-2,-3,4,4]))

