# Inject App secret from environment variable
AppCenterConfigFile=$APPCENTER_SOURCE_DIRECTORY/ios/learncash/AppCenter-Config.plist

sed -i '' "s/APPCENTER_SECRET/$APPCENTER_SECRET/g" $AppCenterConfigFile

# Update version number
Plist=$APPCENTER_SOURCE_DIRECTORY/ios/learncash/Info.plist

/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString 1.1.${APPCENTER_BUILD_ID}" $PLIST