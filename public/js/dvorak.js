function convertDvorakQwerty( bType, strConvert )
{
  var qwerty = "qwertyuiopasdfghjklæzxcvbnm,.-QWERTYUIOPASDFGHJKLÆZXCVBNM;:_";
  var dvorak = "',.pyfgcrlaoeuidhtns;qjkxbmwvz\"<>PYFGCRLAOEUIDHTNS:QJKXBMWVZ";
  var conv = "";

  if( bType == true )
  {
    // convert from dvorak to qwerty
    conv = prc( qwerty, dvorak, strConvert );
  }
  else if( bType == false )
  {
    // convert from qwerty to dvorak
    conv = prc( dvorak, qwerty, strConvert );
  }
  else
  {
    // give the user the finger
    conv = "Invalid input, jack ass.";
  }

  return( conv );
}


function prc( strA, strB, strConvert )
{
  var i = 0;
  var ret = "";

  for( i=0; i<strConvert.length; i++ )
  {
    if( strB.indexOf( strConvert.charAt(i) ) > -1 )
    {
      ret += strA.charAt( strB.indexOf(strConvert.charAt( i )) );
    }
    else
    {
      ret += strConvert.charAt(i);
    }
  }

  return( ret );
}
