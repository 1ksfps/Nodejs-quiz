function isCheckedE()
{
    var option = null;
    diffOptions = document.getElementsByName('diffoption');
    diffOptions.forEach((element) => {
        if(element.checked)
        {
            option = element.value;
        }
    });
    if(option==null)
    {
        alert('please select difficulty');
    }
    amountNumber = document.getElementById('questionNO');
    var amount = amountNumber.options[amountNumber.selectedIndex].value;
    return window.location.assign('/game?difficulty='+ option + '&amount=' + amount);
    
}