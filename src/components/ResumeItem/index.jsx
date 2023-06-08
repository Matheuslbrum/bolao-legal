import { Box, Text } from '@chakra-ui/react';

function ResumeItem({textOnBox, numberOnBox, isDoubleText, textOnDoubleBox, numberOnDoubleBox}) {
    return (
        <>
            <Box
            display='flex'
            flexDir='column'
            alignItems='center'
            bgColor='#fff'
            borderRadius='5px'
            padding='5px 15px'
            width='15rem'
            >
                <Box
                display='flex'
                alignItems='center'
                justifyContent='space-around'
                width='100%'
                gap='10px'
                margin='20px auto'
                >
                    <Text
                    fontSize='20px'
                    >
                        {textOnBox}
                    </Text>
                </Box>
                <Text
                fontSize='30px'
                fontWeight='bold'
                >
                {numberOnBox}
                </Text>
                {isDoubleText && 
                <>
                                    <Box
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='space-around'
                                    width='100%'
                                    gap='10px'
                                    margin='20px auto'
                                    >
                                        <Text
                                        fontSize='20px'
                                        >
                                            {textOnDoubleBox}
                                        </Text>
                                    </Box>
                                    <Text
                                    fontSize='30px'
                                    fontWeight='bold'
                                    >
                                    {numberOnDoubleBox}
                                    </Text>
                </>
                }
            </Box>
        </>
    )
  }
  
  export default ResumeItem;
  