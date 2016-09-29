var parseRequest = (function() {
  var _parseRequest = function(xml, data)  {
    var finalRequest = "", cur_idx = 0;
    xml.replace(/\{\{([A-z]+)\}}/g, function(match, p1, offset, str)  {
      finalRequest += xml.substring(cur_idx, offset) + data[p1];
      cur_idx = offset + match.length;
    });

    finalRequest += xml.substring(cur_idx, xml.length)
    return finalRequest;
  };

  return _parseRequest;
}());

module.exports = parseRequest;
