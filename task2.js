


 const student = [
    {

      "name"   :  "Nur Amin",
      "roll"   :  20,
      "gender" :  "Male",
      "marks"  : [{

      "bn"     : 40,
      "en"     : 60,
      "math"   : 45,
      "s"      : 65,
      "ss"     : 74,
      "rel"    : 65

      }]

    },
    {

      "name"   :  "Humayun Kabir",
      "roll"   :  34,
      "gender" :  "Male",
      "marks"  : [{

      "bn"     : 44,
      "en"     : 73,
      "math"   : 45,
      "s"      : 95,
      "ss"     : 45,
      "rel"    : 45

      }]

    },  {

      "name"   :  "abu Sufian",
      "roll"   :  24,
      "gender" :  "Male",
      "marks"  : [{

      "bn"     : 45,
      "en"     : 47,
      "math"   : 51,
      "s"      : 62,
      "ss"     : 54,
      "rel"    : 61

      }]

    },  {

      "name"   :  "Sabbir Rahman",
      "roll"   :  32,
      "gender" :  "Male",
      "marks"  : [{

      "bn"     : 75,
      "en"     : 63,
      "math"   : 54,
      "s"      : 69,
      "ss"     : 77,
      "rel"    : 36

      }]

    },  {

      "name"   :  "Shahriar Somrat",
      "roll"   :  19,
      "gender" :  "Male",
      "marks"  : [{

      "bn"     : 38,
      "en"     : 65,
      "math"   : 51,
      "s"      : 56,
      "ss"     : 72,
      "rel"    : 52

      }]

    },  {

      "name"   :  "Abu Achem",
      "roll"   :  31,
      "gender" :  "Male",
      "marks"  : [{

      "bn"     : 51,
      "en"     : 95,
      "math"   : 54,
      "s"      : 69,
      "ss"     : 85,
      "rel"    : 32

      }]

    },  {

      "name"   :  "Mamun Islam",
      "roll"   :  32,
      "gender" :  "Male",
      "marks"  : [{

      "bn"     : 49,
      "en"     : 66,
      "math"   : 45,
      "s"      : 45,
      "ss"     : 71,
      "rel"    : 62

      }]

    },  {

      "name"   :  "Abu Raihan",
      "roll"   :  23,
      "gender" :  "Male",
      "marks"  : [{

      "bn"     : 41,
      "en"     : 63,
      "math"   : 51,
      "s"      : 60,
      "ss"     : 45,
      "rel"    : 34

      }]

    },  {

      "name"   :  "Sumaya tasneem",
      "roll"   :  29,
      "gender" :  "Female",
      "marks"  : [{

      "bn"     : 43,
      "en"     : 64,
      "math"   : 65,
      "s"      : 54,
      "ss"     : 47,
      "rel"    : 40

      }]

    },  {

      "name"   :  "Abu Sayeed",
      "roll"   :  25,
      "gender" :  "Male",
      "marks"  : [{

      "bn"     : 50,
      "en"     : 66,
      "math"   : 55,
      "s"      : 95,
      "ss"     : 74,
      "rel"    : 35

      }]

    }
  ]

  let data = JSON.stringify(student);
  console.log(data)

  localStorage.setItem(data)