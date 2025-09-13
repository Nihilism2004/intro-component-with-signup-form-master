function error()
{
    const e1 = document.getElementsByClassName('e1');
    const e2 = document.getElementsByClassName('e2');
    const e3 = document.getElementsByClassName('e3');
    const e4 = document.getElementsByClassName ('e4');
    const i1 = document.getElementById('i1');
    const i2 = document.getElementById('i2');
    const i3 = document.getElementById('i3');
    const i4 = document.getElementById('i4');
    if(i1.value.trim() === '')
    {
        for( let item of e1 )
        {
            item.style.display = 'block'
        }
    }
    else
    {
        for( let item of e1) 
        {
            item.style.display = 'none'
        }
        
    }
    if(i2.value.trim() === '')
    {
        for(let item of e2)
        {
            item.style.display = 'block'
        }
    }
    else
    {
        for(let item of e2)
        {
            item.style.display = 'none'
        }
    }
    if(i3.value.trim()=== '')
    {
        for(let item of e3)
        {
            item.style.display = 'block'
        }
    }
    else
    {
        for(let item of e3)
        {
            item.style.display = 'none'
        }
    }
    if(i4.value.trim()==='')
    {
        for(let item of e4)
        {
            item.style.display = 'block'
        }
    }
    else
    {
        for(let item of e4)
        {
            item.style.display = 'none'
        }
    }
}
