// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  
  if (extension === "html"){
    return "text/html";
  }
  
  if (extension === "css"){
    return "text/css";
  }

  if (extension === "jpeg"){
    return "image/jpeg";
  }

  if (extension === "jpg"){
    return "image/jpeg";
  }

  return "text/plain";
}