var names = [
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim"
];

console.log("LEVEL 0");

function display(names) {
  var text = "";
  names.forEach(function(element) {
    text += element + "\n";
  })

  return text;
}

console.log(display(names));

console.log("---------------------")

console.log("LEVEL 1");

function title(names) {
  var text = "";
  text = names.filter(word => word.indexOf("Mr.") != -1);
  var textStr = text.join("\n");
  return textStr;
}

console.log(title(names));

console.log("---------------------")

console.log("LEVEL 2");

function gender(names) {
  var genderList = "";
  names.forEach(function(name, index) {
    if (name[2] === ".") {
      genderList += (index + 1) + ". " + name + " (male)" + "\n";
    } else {
      genderList += (index + 1) + ". " + name + " (female)" + "\n";
    }
  })
  return genderList;
}

console.log(gender(names));

console.log("---------------------")

console.log("LEVEL 3");

function search_name(name) {
  var found = names.find(function(element) {
    return element.toLowerCase().indexOf(name.toLowerCase()) !== -1 ;
  });
  return found;
}

console.log(search_name("abdul"));

console.log("---------------------")

console.log("LEVEL 4");

var names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
var names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];

function merge(names1,names2){
  var result=[];
  result = names1.concat(names2).join(", ");
  return result;
}

console.log(merge(names1,names2));

console.log("---------------------")

console.log("LEVEL 5");

var names = [
  "Mr. Fahri",
  null,
  undefined,
  "Mr. Abdul",
  24,
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  32,
  "Mrs. Paula",
  7,
  22,
  "Mr. Hakim"
];

function remove (names) {
  var result = "";
  for (var i = 0; i < names.length; i++) {
    if (typeof names[i] == "string") {
      result += names[i] + ", ";
    }
  }
  return result;
}

console.log(remove(names));
