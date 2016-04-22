var settings =

  { resource : 'program'

  , facets :
    { Campus : 'Campus'
    , Degree_Level : 'Degree Level'
    , Online_Percent : 'Online Percent'
    , Subject : 'Subject'
    , 
    }

  , numericfacets :
    { Res_CPC : 'Res Cost / Credit'
    , Non_Res_CPC : 'Non-Res Cost / Credit'
    , Minimum_GPA : 'Minimum GPA'
    , Duration : 'Duration(months)'
    }

  , name : [ 'Program_Name', 'Degree' ]

  , description : 'Program_Description'

  , orderby :
    { Res_CPC : 'Resident Cost / Credit'
    , Non_Res_CPC  : 'Non-Resident Cost / Credit'
    , Duration : 'Duration(months)'
    }
  }
