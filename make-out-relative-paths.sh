# The commands work as intended, but do not fix the static export not working

# To find where there are relative paths in the out folder
egrep --color -o  -r out/ -e "(\"|\')(/[[:alnum:]_-]+)+\.{0,1}[[:alnum:]_-]*(\"|\')"
# Or the perl equivalent 
find out/ -type f -exec perl -ne 'while( m:('\''|")((/[\w_-]+)+\.?[\w_-]*)('\''|"):g ){ print "$1$2$4\n";}' {} \;

# Perl command to replace all absolute paths with relative ones
# For a test file
perl -i  -pe 's:('\''|")((/[\w_-]+)+\.?[\w_-]*)('\''|"):$1'$(pwd)'/out$2$4:g' test.txt
# For all files in out
find out/ -type f -exec perl -i  -pe 's:('\''|")((/[\w_-]+)+\.?[\w_-]*)('\''|"):$1'$(pwd)'/out$2$4:g' {} \;