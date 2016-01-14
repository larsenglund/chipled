#include <stdio.h>
int main(int argc, char **argv)
{
  system("/usr/sbin/i2cset -f -y 0 0x34 0x93 0x1");
  return 0;
}
