//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//question
function domainName(url){
  }

//solution
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };
