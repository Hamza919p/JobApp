import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { Stack, useRouter, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const Jobdetails = () => {
    const router = useRouter()
    const params = useGlobalSearchParams()
    const { data, isLoading, error, refetch } = useFetch('job-details', { job_id : params.id })
    
    const onRefresh = () => {}

    const [refreshing, setRefreshing] = useState(false)

    //Info related to Tabs
    const tabs = ["About", "Qualifications", "Responsibilities"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const displayTabContent = () => {
        switch(activeTab) {
            case "About":
                return <JobAbout 
                    info = {data[0].job_description ?? 'N/A'}
                />
            case "Qualifications":
                return <Specifics 
                    title = {"Qualifications"}
                    points = { data[0].job_highlights?.Qualifications ?? ['N/A'] }
                />
            case "Responsibilities":
            default:
                break;

        }
    }

    return (
       
       <SafeAreaView>
        <Stack.Screen options={
            {
                headerStyle : { backgroundColor: COLORS.white },
                headerShadowVisible : false,
                headerBackVisible : false,
                headerLeft : () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.left}
                        dimension="60%"
                        handlePress={()=> router.back()}
                    /> 
                ),
                headerRight : () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.share}
                        dimension="60%"
                        handlePress={()=>{}}
                    />
                ),
                headerTitle : ""
            }}/>

            <>
                <ScrollView 
                    showsVerticalScrollIndicator = {false} 
                    refreshControl = { 
                            <RefreshControl refreshing = { refreshing } onRefresh={ onRefresh }/> 
                    }>

                        {
                            isLoading ? ( <ActivityIndicator size={"large"} color={COLORS.primary} /> )
                            : error ? ( <Text>Something Went Wrong</Text> )
                            : data.length === 0 ? ( <Text>Empty Data</Text> )
                            : ( <View style = {{ padding : SIZES.medium, paddingBottom : 100 }} >
                                 <Company 
                                    companyLogo = { data[0].employer_logo }
                                    jobTitle = { data[0].job_title }
                                    companyName = { data[0].employer_name }
                                    Location = { data[0].job_country }
                                 />

                                 <JobTabs 
                                    tabs = {tabs}
                                    activeTab = {activeTab}
                                    setActiveTab = {setActiveTab}
                                 />  

                                 {
                                    displayTabContent()
                                 }

                            </View> )
                        }

                </ScrollView>
            </>

       </SafeAreaView>        
    )
}

export default Jobdetails;