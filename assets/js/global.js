// Global for Management
var StoreLogicalPosition;
var RowStoreLogicalPosition;
var DirStoreLogicalPosition;
var ColStoreLogicalPosition;

// Aggiungi
var Battery = 0;
var LogicalPhysical = false;
var BabyNo = 10;
var Watchdog = 0;


// Global for Read PLC Data

var StatusMachine = 0;
var StatusMode = false;
var CarrierInPosition = false;
var CarrierIsMoving = false;
var CarrierIsFault = false;
var LifterInPositionUp = false;
var LifterInPositionDown = false;
var LifterIsMoving = false;
var LifterIsFault = false;

var PalletDetectedSide_A = false;
var PalletDetectedSide_B = false;
var MotherDetectedSide_A = false;
var MotherDetectedSide_B = false;
var PathNotFreeSide_A = false;
var PathNotFreeSide_B = false;
var ShuttleOnBoard= false;
var SelPhysicalLogical= false;

var StatusStep = 0;
var StatusCarrierActPositon_logicalRow = 0;
var StatusCarrierActPositon_logicalCol = 0;
var StatusCarrierActPositon_logicalDir = 0;
var PositionResult = 0;
var TaskNumber = 0;

var CarrierActSpeed = 0.0;
var CarrierActPosition_mm = 0.0;
var Position_mm = 0.0;
var BatteryLevel = 0;

var Alarm_Controller_000 = false;
var Alarm_Controller_001 = false;
var Alarm_Controller_002 = false;
var Alarm_Controller_003 = false;
var Alarm_Controller_004 = false;
var Alarm_Controller_005 = false;
var Alarm_Controller_006 = false;
var Alarm_Controller_007 = false;
var Alarm_Controller_008 = false;
var Alarm_Controller_009 = false;
var Alarm_Controller_010 = false;
var Alarm_Controller_011 = false;
var Alarm_Controller_012 = false;
var Alarm_Controller_013 = false;
var Alarm_Controller_014 = false;
var Alarm_Controller_015 = false;
var Alarm_Controller_100 = false;
var Alarm_Controller_101 = false;
var Alarm_Controller_102 = false;
var Alarm_Controller_103 = false;
var Alarm_Controller_104 = false;
var Alarm_Controller_105 = false;
var Alarm_Controller_106 = false;
var Alarm_Controller_107 = false;
var Alarm_Controller_108 = false;
var Alarm_Controller_109 = false;
var Alarm_Controller_110 = false;
var Alarm_Controller_111 = false;
var Alarm_Controller_112 = false;
var Alarm_Controller_113 = false;
var Alarm_Controller_114 = false;
var Alarm_Controller_115 = false;
var Alarm_Carrier_000 = false;
var Alarm_Carrier_001 = false;
var Alarm_Carrier_002 = false;
var Alarm_Carrier_003 = false;
var Alarm_Carrier_004 = false;
var Alarm_Carrier_005 = false;
var Alarm_Carrier_006 = false;
var Alarm_Carrier_007 = false;
var Alarm_Carrier_008 = false;
var Alarm_Carrier_009 = false;
var Alarm_Carrier_010 = false;
var Alarm_Carrier_011 = false;
var Alarm_Carrier_012 = false;
var Alarm_Carrier_013 = false;
var Alarm_Carrier_014 = false;
var Alarm_Carrier_015 = false;
var Alarm_Lifter_000 = false;
var Alarm_Lifter_001 = false;
var Alarm_Lifter_002 = false;
var Alarm_Lifter_003 = false;
var Alarm_Lifter_004 = false;
var Alarm_Lifter_005 = false;
var Alarm_Lifter_006 = false;
var Alarm_Lifter_007 = false;
var Alarm_Lifter_008 = false;
var Alarm_Lifter_009 = false;
var Alarm_Lifter_010 = false;
var Alarm_Lifter_011 = false;
var Alarm_Lifter_012 = false;
var Alarm_Lifter_013 = false;
var Alarm_Lifter_014 = false;
var Alarm_Lifter_015 = false;

