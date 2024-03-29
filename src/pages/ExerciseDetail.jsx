import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/system';

import { exerciseOption, youtubeOptions, fetchData  } from '../utils/fetchData';

import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilaeExercises from '../components/SimilaeExercises';


const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchExecisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOption);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOption);
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOption);
            setEquipmentExercises(equimentExercisesData);
        };

        fetchExecisesData();
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilaeExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
        </Box>
    );
};

export default ExerciseDetail;