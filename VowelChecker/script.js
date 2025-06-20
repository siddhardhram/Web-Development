function checkVowels()
{
    var text=document.getElementById("inputText").value;
    var vowelCount=0;

    text=text.toLowerCase();

    for(i=0;i<text.length;i++)
    {
       var char=text.charAt(i)
       {
        if(isVowel(char))
        {
            vowelCount++;

        }
       }
    }
    var result=document.getElementById("result");
    result.textContent="Text Vowels:"+vowelCount;


}

function isVowel(char)
{
    var vowel=["a","e","i","o","u"];
    return vowel.includes(char);
}